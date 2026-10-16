$root = 'C:\maryeyeclinic\website\dist'
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback,4173)
$listener.Start()
while ($true) {
 $client = $listener.AcceptTcpClient()
 try {
  $client.ReceiveTimeout = 3000; $client.SendTimeout = 3000; $stream = $client.GetStream()
  $reader = [System.IO.StreamReader]::new($stream)
  $line = $reader.ReadLine()
  if (!$line) { continue }
  $url = [Uri]::UnescapeDataString(($line.Split(' ')[1]).Split('?')[0])
  while ($reader.ReadLine()) {}
  if ($url -eq '/') { $url = '/index.html' }
  $file = [IO.Path]::GetFullPath((Join-Path $root $url.TrimStart('/')))
  $status = '200 OK'
  $mime = 'application/octet-stream'
  if ($file.StartsWith($root + '\') -and [IO.File]::Exists($file)) {
   $body = [IO.File]::ReadAllBytes($file)
   switch ([IO.Path]::GetExtension($file)) {
    '.html' {$mime='text/html; charset=utf-8'}
    '.css' {$mime='text/css; charset=utf-8'}
    '.js' {$mime='text/javascript; charset=utf-8'}
    '.png' {$mime='image/png'}
    '.jpg' {$mime='image/jpeg'}
    '.svg' {$mime='image/svg+xml'}
    '.webp' {$mime='image/webp'}
   }
  } else { $status='404 Not Found'; $body=[Text.Encoding]::UTF8.GetBytes('Not found') }
  $header=[Text.Encoding]::ASCII.GetBytes("HTTP/1.1 $status`r`nContent-Type: $mime`r`nContent-Length: $($body.Length)`r`nCache-Control: no-store`r`nConnection: close`r`n`r`n")
  $stream.Write($header,0,$header.Length)
  $stream.Write($body,0,$body.Length)
 } catch {} finally { $client.Close() }
}

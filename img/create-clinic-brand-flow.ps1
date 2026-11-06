$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.Drawing
$root=Split-Path $PSScriptRoot -Parent
$ffmpeg=Get-ChildItem "$root/.tools" -Recurse -Filter ffmpeg.exe | Select-Object -First 1 -ExpandProperty FullName
$frames=Join-Path $root '.tools/clinic-final-flow-frames'
New-Item -ItemType Directory -Force $frames | Out-Null
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @'
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
public static class ClinicBrandFlow {
 public static void Render(string input,string folder,string logo) {
  const int ox=570,oy=530,w=450,h=180,n=240;
  using(var source=new Bitmap(input)) {
   int[][] tris={new int[]{883,587,924,590,903,608},new int[]{792,613,833,616,811,635},new int[]{695,641,735,644,714,663}};
   foreach(var tr in tris) {
    using(var mask=new Bitmap(source.Width,source.Height)) {
     using(var g=Graphics.FromImage(mask)) using(var pen=new Pen(Color.White,5)) {
      Point[] pts={new Point(tr[0],tr[1]),new Point(tr[2],tr[3]),new Point(tr[4],tr[5])};
      g.FillPolygon(Brushes.White,pts);g.DrawPolygon(pen,pts);
     }
     for(int y=tr[1]-8;y<=tr[5]+8;y++) {
      int left=-1,right=-1;
      for(int x=tr[0]-8;x<=tr[2]+8;x++) if(mask.GetPixel(x,y).A>0){if(left<0)left=x;right=x;}
      if(left<0)continue;
      Color a=source.GetPixel(left-3,y),b=source.GetPixel(right+3,y);
      for(int x=left;x<=right;x++){double u=(x-left+3.0)/(right-left+6.0);source.SetPixel(x,y,Color.FromArgb((int)(a.R*(1-u)+b.R*u),(int)(a.G*(1-u)+b.G*u),(int)(a.B*(1-u)+b.B*u)));}
     }
    }
   }
   bool[,] road=new bool[w,h];
   using(var floor=new Bitmap(w,h,PixelFormat.Format32bppArgb)) {
    for(int y=0;y<h;y++) for(int x=0;x<w;x++) {
     Color c=source.GetPixel(ox+x,oy+y);
     road[x,y]=c.R>80&&c.R>1.65*c.G&&c.G<140&&c.B<100;
     if(!road[x,y])continue;
     double u=Math.Max(0,Math.Min(1,(x+ox-595.0)/400));
     double k=Math.Max(.86,Math.Min(1.08,c.R/208.0));
     // Burgundy and coral separate the route from the green transit signage.
     floor.SetPixel(x,y,Color.FromArgb(255,(int)((143+89*u)*k),(int)((35+51*u)*k),(int)((66+2*u)*k)));
    }
    using(var g=Graphics.FromImage(source))g.DrawImageUnscaled(floor,ox,oy);
   }
   // Clear the old building-name badge before placing it below the logo sign.
   for(int y=242;y<307;y++) {
    Color left=source.GetPixel(583,y),right=source.GetPixel(878,y);
    for(int x=590;x<871;x++) {
     double u=(x-583.0)/(878-583);
     source.SetPixel(x,y,Color.FromArgb((int)(left.R*(1-u)+right.R*u),(int)(left.G*(1-u)+right.G*u),(int)(left.B*(1-u)+right.B*u)));
    }
   }
   // Rebuild the sign as a vector capsule, using the supplied logo unchanged.
   using(var g=Graphics.FromImage(source))
   using(var pill=new GraphicsPath()) {
    g.SmoothingMode=SmoothingMode.AntiAlias;
    g.InterpolationMode=InterpolationMode.HighQualityBicubic;
    pill.AddArc(506,162,92,92,90,180);
    pill.AddArc(851,162,92,92,270,180);pill.CloseFigure();
    using(var fill=new LinearGradientBrush(new Rectangle(506,162,437,92),Color.FromArgb(132,110,80),Color.FromArgb(67,51,38),10))g.FillPath(fill,pill);
    using(var pen=new Pen(Color.FromArgb(210,184,139),3))g.DrawPath(pen,pill);
    using(var mark=new Bitmap(logo))g.DrawImage(mark,new Rectangle(529,177,312,59));
    using(var f=new Font("Malgun Gothic",30,FontStyle.Bold,GraphicsUnit.Pixel))
    using(var brush=new SolidBrush(Color.FromArgb(245,222,168)))g.DrawString("9층",f,brush,856,185);
    using(var badge=new GraphicsPath()) {
     badge.AddArc(592,270,46,46,90,180);
     badge.AddArc(820,270,46,46,270,180);badge.CloseFigure();
     using(var fill=new LinearGradientBrush(new Rectangle(592,270,274,46),Color.White,Color.FromArgb(231,225,214),90))g.FillPath(fill,badge);
     using(var pen=new Pen(Color.FromArgb(167,147,117),1.5f))g.DrawPath(pen,badge);
     using(var f=new Font("Malgun Gothic",25,FontStyle.Bold,GraphicsUnit.Pixel))
     using(var brush=new SolidBrush(Color.FromArgb(83,65,47)))
     using(var format=new StringFormat(){Alignment=StringAlignment.Center,LineAlignment=StringAlignment.Center})g.DrawString("엠스퀘어메디컬센터",f,brush,new RectangleF(592,270,274,46),format);
    }
   }
   source.Save(Path.Combine(folder,"base.png"),ImageFormat.Png);
   PointF[] path=new PointF[401];double[] distances=new double[401];
   for(int i=0;i<=400;i++) {
    double t=i/400.0;
    if(t<.78){double u=t/.78;path[i]=new PointF((float)(1008+(714-1008)*u),(float)(565+(648-565)*u));}
    else{double u=(t-.78)/.22,v=1-u;path[i]=new PointF((float)(v*v*714+2*v*u*687+u*u*590),(float)(v*v*648+2*v*u*656+u*u*603));}
    if(i>0){double dx=path[i].X-path[i-1].X,dy=path[i].Y-path[i-1].Y;distances[i]=distances[i-1]+Math.Sqrt(dx*dx+dy*dy);}
   }
   for(int frame=0;frame<n;frame++) using(var overlay=new Bitmap(w,h,PixelFormat.Format32bppArgb)) {
    double phase=frame/(double)n;
    for(int y=0;y<h;y++)for(int x=0;x<w;x++) {
     if(!road[x,y])continue;
     double progress=((979-(ox+x))*.962+((oy+y)-573)*.273)/900;
     double wave=.5+.5*Math.Cos(2*Math.PI*(progress-phase));
     double dither=(((x*73+y*151)%251)/250.0-.5)*1.2;
     overlay.SetPixel(x,y,Color.FromArgb(255,(int)(143+89*wave+dither),(int)(35+51*wave+dither),(int)(66+2*wave+dither)));
    }
    using(var g=Graphics.FromImage(overlay)) {
     g.SmoothingMode=SmoothingMode.AntiAlias;
     for(int i=-3;i<8;i++) {
      double s=(i+3*phase)*72;
      if(s<0||s>distances[400])continue;
      int index=1;while(index<400&&distances[index]<s)index++;
      double u=(s-distances[index-1])/(distances[index]-distances[index-1]);
      double px=path[index-1].X+(path[index].X-path[index-1].X)*u;
      double py=path[index-1].Y+(path[index].Y-path[index-1].Y)*u;
      double dx=path[index].X-path[index-1].X,dy=path[index].Y-path[index-1].Y;
      double len=Math.Sqrt(dx*dx+dy*dy);dx/=len;dy/=len;
      double x=px-ox,y=py-oy;
      PointF[] pts={new PointF((float)(x+dx*9),(float)(y+dy*9)),new PointF((float)(x-dx*7-dy*7),(float)(y-dy*7+dx*7)),new PointF((float)(x-dx*7+dy*7),(float)(y-dy*7-dx*7))};
      using(var brush=new SolidBrush(Color.FromArgb(245,255,253,245)))g.FillPolygon(brush,pts);
     }
    }
    for(int y=0;y<h;y++)for(int x=0;x<w;x++)if(!road[x,y])overlay.SetPixel(x,y,Color.Transparent);
    overlay.Save(Path.Combine(folder,"flow-"+frame.ToString("D3")+".png"),ImageFormat.Png);
   }
  }
 }
}
'@
[ClinicBrandFlow]::Render((Join-Path $PSScriptRoot '주례성모안과와 주례역 길찾기 지도.png'),$frames,(Join-Path $root 'logo/주례성모안과_로고2_w.png'))
$video=Join-Path $PSScriptRoot '주례성모안과_약도_최종.mp4'
& $ffmpeg -hide_banner -loglevel warning -y -loop 1 -framerate 60 -i "$frames/base.png" -stream_loop 2 -framerate 60 -i "$frames/flow-%03d.png" -filter_complex '[0:v][1:v]overlay=570:530:shortest=1,format=yuv420p[v]' -map '[v]' -t 12 -an -c:v libx264 -crf 18 -preset medium -movflags +faststart $video
if($LASTEXITCODE -ne 0){throw 'Video encoding failed'}
& $ffmpeg -hide_banner -loglevel warning -y -ss 1 -i $video -frames:v 1 -update 1 (Join-Path $PSScriptRoot '주례성모안과_약도_최종_미리보기.png')
& $ffmpeg -hide_banner -loglevel warning -y -i $video -t 4 -filter_complex 'fps=50,scale=960:-1:flags=lanczos,split[a][b];[a]palettegen[p];[b][p]paletteuse' -loop 0 (Join-Path $PSScriptRoot '주례성모안과_약도_최종.gif')
if($LASTEXITCODE -ne 0){throw 'GIF encoding failed'}
Get-Item $video | Select-Object FullName,Length

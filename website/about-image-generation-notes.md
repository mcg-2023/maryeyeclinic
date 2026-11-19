# About image update

Generated with the built-in image_gen tool. Assets are saved in `dist/assets/about-single-*-v2.webp`. The examination page uses the actual clinic photograph `dist/assets/facility-examination-01.jpg`.

## Prompt set

Each image uses the page-specific `scene` recorded in `topic-imagery-manifest.json` under “About — single subject”, with this common direction:

> Website ophthalmology overview image, landscape 4:3 composition. Single coherent scene only. No normal-versus-abnormal comparison, split panels, labels, text, arrows, border or watermark. Subject centered and large, safely within frame. Soft warm ivory background extends seamlessly to every edge with subtle studio shadow; no inset rectangle or framed canvas. Anatomical subjects use gentle premium 3D educational illustration; lens and artificial tears use realistic studio product photography.

The oculoplastic image was regenerated with this replacement prompt to remove exposed anatomy:

> Landscape 4:3 premium ophthalmology website image. A single gentle realistic 3D beauty teaching portrait crop of an elderly Korean woman's eye region, both eyelids with mild age-related drooping, smooth completely intact natural skin. No anatomy cutaway, exposed muscles, skin removal, transparent skin, surgical instruments, blood, or normal versus abnormal comparison. Calm warm ivory background extending to every edge, soft diffuse lighting, centered upper face, generous space around face, no text, labels or frame. Natural understated appearance, attractive, dignified and not grotesque.

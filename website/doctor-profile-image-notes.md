# Doctor portrait background removal

Tool: built-in image_gen, transparent background editing mode.

Sources: `jurye/이정헌원장님_프로필.png`, `jurye/유지명원장님_프로필.png`, `jurye/송도윤원장님_프로필.png`.

Outputs: `dist/assets/doctor-lee-profile-v3.png`, `dist/assets/doctor-yoo-profile-v3.png`, `dist/assets/doctor-song-profile-v3.png`.

Prompt applied separately to each original:

> Edit this exact supplied doctor profile photograph. Remove ONLY the background, make it fully transparent with a clean natural alpha silhouette around hair, shoulders and coat. Preserve the exact person, exact face identity, age, glasses if present, facial expression, hairstyle, body proportions, pose, hands, white coat, embroidery and all clothing completely unchanged. Do not beautify, redraw, change logos or add anything. Keep the complete existing portrait and original framing. This is a precise background removal for placing the same original person onto a clinic brand colored CSS backdrop. No background, no shadow backdrop, no text.

Brand backdrop is rendered by CSS in `dist/november-refinements.css`, shared by all three `.doctor-photo.original` containers.



export let ManifestForge: string[][] = [];

export function GetForgeManifest(){
    if(ManifestForge){
        return ManifestForge;
    }
    const manifest = fetch("https://files.minecraftforge.net/net/minecraftforge/forge/maven-metadata.json");
    manifest.then(response => response.json())
        .then((data) => {
            ManifestForge = data;
        })
    console.log(Object.keys(ManifestForge));
}
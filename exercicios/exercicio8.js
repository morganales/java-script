const generoDeFilme = ["Terror", "Ação", "Aventura", "Drama", "Suspense"];

//console.log(generoDeFilme[3] + " e " + generoDeFilme[0];

console.log(generoDeFilme);

generoDeFilme.push("Comédia");
console.log(generoDeFilme);

generoDeFilme[1] = "Biografia";
console.log(generoDeFilme);

generoDeFilme[generoDeFilme.length] = ("Scify");
console.log(generoDeFilme);

//generoDeFilme.pop()
//console.log(generoDeFilme);

//console.log(generoDeFilme);
//console.log(generoDeFilme.sort());

generoDeFilme.splice(1, 1, "Ação");
console.log(generoDeFilme);

generoDeFilme.splice(2,0,"Animação");
console.log(generoDeFilme);

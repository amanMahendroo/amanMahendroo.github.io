function feature(t, d) {
	this.title = t || "Acoustic Guitar"
	this.desc = d || "Get imported and branded guitars at affordable price."
}

for (var i = 0; i < 5; i++) {
	features.push(new feature())
}
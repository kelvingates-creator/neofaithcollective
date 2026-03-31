const Twilight_Cover = new Proxy({"src":"/_astro/Twilight_Cover.CodURR07.jpg","width":1116,"height":558,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/neofaithcollective/src/content/projects/Twilight/Twilight_Cover.jpg";
							}
							
							return target[name];
						}
					});

export { Twilight_Cover as default };

const Dawn = new Proxy({"src":"/_astro/Dawn.D8NFvJkl.jpg","width":1344,"height":768,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/neofaithcollective/src/content/diary/example/Dawn.jpg";
							}
							
							return target[name];
						}
					});

export { Dawn as default };

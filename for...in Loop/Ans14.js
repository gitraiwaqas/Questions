const settings = {
  theme: "dark",
  notifications: true,
  autoSave: false,
  fontSize: 14,
};

for (key in settings) {
  if ( typeof settings[key] === "boolean") {
    settings[key] = !settings[key];
  }
}
console.log(settings);

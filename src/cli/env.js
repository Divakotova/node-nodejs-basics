const parseEnv = () => {
    const values = [];
    for (let key of Object.keys(process.env)) {
      if (key.slice(0, 4) === "RSS_") {
        key.push(`${key}=${process.env[key]}`);
      }
    }
    console.log(values.join("; "));
};

parseEnv();
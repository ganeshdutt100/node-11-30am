const bcrypt = require("bcrypt");
async function demo() {
  try {
    const plainPass = "Nandini@1234567";
    console.log(plainPass);

    const saltRounds = 10;
    //
    //     const hashedPass = await bcrypt.hash(plainPass, saltRounds);
    //     console.log(hashedPass);

    // const passMatch = await bcrypt.compare(plainPass, hashedPass);
    // console.log(passMatch);
    // console.log(hashedPass);

    let a = "Nandini@1234567";
    let b = "$2b$10$vzj7dppfsTyONPuADsEyzuVHsulUEWsG8A5B81iLX5Gl9vk.eDY3K";
    const passMatch = await bcrypt.compare(a, b);
    console.log(passMatch);
  } catch (err) {
    console.error(err);
  }
}

demo();

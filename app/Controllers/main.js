"use strict ";
const { productdata } = require("../../models");
const { ratings } = require("../../models");
const db = require("../../models");
const wishlistdata = db.wishlistdata;
const otptable = db.otptable;
const registrationdata = db.registrationdata;
const forum = db.forum;
const shop = db.shop;
const order = db.order;
const menu = db.menu;

const ERROR_MESSAGE = "An inernal server error has occurred!.";

// const {
//   wishlistdata,
//   otptable,
//   registrationdata,
//   forum,
// } = require("../../models");

const nodemailer = require("nodemailer");
const express = require("express");

// image Upload
const multer = require("multer");
const path = require("path");

async function datasend(req, res, next) {
  try {
    const vOtp = req.body.otp;
    // const email = req.body.Email;
    console.log("otp entered is : ", vOtp);
    // const DATA = await UserTable.findAll({ where: { Email: email } });
    const DATA = await otptable.findOne({ where: { Otp: vOtp } });

    console.log("DATA => ", DATA);
    // console.log("DATA.otp => ", DATA.Otp);

    if (DATA) {
      console.log("otp verified");
      const data = await registrationdata.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        // contactNumber:req.body.contactNumber
        collegeName: req.body.collegeName,
      });
      return res.status(200).json("otp verified successfully");
    } else {
      console.log("otp not verified");
      return res.status(200).json("otp not verified");
    }
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

async function sendMAil(req, res, next) {
  const val = Math.floor(1000 + Math.random() * 9000);

  try {
    const data = await otptable.create({
      email: req.body.email,
      otp: val,
    });

    const tranporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "sahilaroraji2002@gmail.com",
        pass: "iuppwqxpqnkoithv",
      },
    });

    const mailOptions = {
      from: "sahilaroraji2002@gmail.com",
      to: req.body.email,
      subject: "otp for user verification",
      text: `please enter this otp ${val} with your given email id.`,
    };

    tranporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send("error");
      } else {
        console.log("send");
        res.send("success");
      }
    });

    // console.log("data entered : ", data);

    return res.status(200).json("mail sent succesfully");
    return next();
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

//  // 8. Upload Image Controller

//   // main work

//   // 1. create product

const addProduct = async (req, res) => {
  let info = {
    imgId: req.file,
    productname: req.body.productname,
    price: req.body.price,
    description: req.body.description,
    sellerId: req.body.sellerId,
    category: req.body.category,
    contactNumber: req.body.contactNumber,
    collegeName: req.body.collegeName,
  };

  const product = await productdata.create(info);
  res.status(200).send(product);
  console.log(product);
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    console.log("req.file=>", req.file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("imgId");

//   // 2. get all products

const getAllProducts = async (req, res) => {
  let products = await productdata.findAll({});
  res.status(200).send(products);
};

//   // 3. get single product

const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await productdata.findOne({ where: { id: id } });
  res.status(200).send(product);
};

//   // 4. update Product

const updateProduct = async (req, res) => {
  let id = req.params.id;

  const product = await productdata.update(req.body, { where: { id: id } });

  res.status(200).send(product);
};

//   // 5. delete product by id

const deleteProduct = async (req, res) => {
  let id = req.params.id;

  await productdata.destroy({ where: { id: id } });

  res.status(200).send("Product is deleted !");
};

//   wishlist crud operations

const addProductinwish = async (req, res) => {
  let info = {
    // imgId: req.file.path,
    productname: req.body.productname,
    price: req.body.price,
    description: req.body.description,
    // published: req.body.published ? req.body.published : false

    category: req.body.category,
    contactNumber: req.body.contactNumber,
    collegeName: req.body.collegeName,
  };

  const product = await wishlistdata.create(info);
  res.status(200).send(product);
  console.log(product);
};
//

const getAllProductsinwish = async (req, res) => {
  let products = await wishlistdata.findAll({});
  res.status(200).send(products);
};

const getOneProductinwish = async (req, res) => {
  let id = req.params.id;
  let product = await wishlistdata.findOne({ where: { id: id } });
  res.status(200).send(product);
};

const deleteProductinwish = async (req, res) => {
  let id = req.params.id;

  await wishlistdata.destroy({ where: { id: id } });

  res.status(200).send("Product is deleted !");
};

async function Forum(req, res, next) {
  try {
    const data = await forum.create({
      name: req.body.name,
      request: req.body.request,
      //   Password: Secpassword,
    });

    console.log("DATA => ", data);
    // console.log("DATA.otp => ", DATA.Otp);

    return res.status(200).json("Success");

    return next();
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

async function Getforum(req, res, next) {
  try {
    const data = await forum.findAll();

    console.log("DATA => ", data);
    // console.log("DATA.otp => ", DATA.Otp);

    return res.status(200).json({ data });

    return next();
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

async function ContactUsMail(req, res, next) {
  try {
    const tranporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "contact.technomaits@gmail.com",
        pass: "aoklxvidsangbovb",
      },
    });

    const mailOptions = {
      from: "contact.technomaits@gmail.com",
      to: "contact.technomaits@gmail.com",
      subject: `User Query from ${req.body.name} , mail- ${req.body.email}`,
      text: req.body.message,
    };

    tranporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send("error");
      } else {
        console.log("send");
        res.send("success");
      }
    });

    // console.log("data entered : ", data);

    res.status(200).json("mail sent succesfully");
    return next();
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}
async function addmenu(req, res, next) {
  try {
    //   const salt = await bcrypt.genSalt(10);
    //   const Secpassword = await bcrypt.hash(req.body.Password, salt);

    const data = await menu.create({
      shopId: req.body.shopId,
      // rollno: req.body.rollno,
      // name: DataTypes.STRING,
      name: req.body.name,
      price: req.body.price,
    });

    console.log("data entered :", data);
    res.status(200).json("menu added done");
    return next();
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

async function getmenu(req, res, next) {
  try {
    // const salt = await bcrypt.genSalt(10);

    //   const Secpassword = await bcrypt.hash(req.body.Password, salt);
    const data = await menu.findAll({
      where: { shopId: req.params.id },
    });

    // var json = { list: ['Test', 'Array'], success: true }

    //   console.log("data entered :", data);
    return res.status(200).json({ data });
  } catch (error) {
    console.error("error : ", error);
    return res.status(500).send(ERROR_MESSAGE);
  }
}

async function deletemenu(req, res, next) {
  try {
    // const salt = await bcrypt.genSalt(10);

    //   const Secpassword = await bcrypt.hash(req.body.Password, salt);
    const data = await menu.destroy({
      where: {
        name: req.body.name,
        shopId: req.body.shopId,
      },
    });

    //   console.log("data entered :", data);
    res.status(200).json("deletion done");
    return next();
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}
async function updatemenu(req, res, next) {
  try {
    // const salt = await bcrypt.genSalt(10);

    //   const Secpassword = await bcrypt.hash(req.body.Password, salt);
    const data = await menu.update(
      { price: req.body.price },
      { where: { name: req.body.name, shopId: req.body.shopId } }
    );

    //   console.log("data entered :", data);
    res.status(200).json("updation done");
    return next();
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

async function OrderFood(req, res, next) {
  try {
    const data = await order.create({
      shopId: req.body.shopId,
      name: req.body.name,
      price: req.body.price,
      customerId: req.body.customerId,
      date: req.body.date,
    });
    console.log("data entered :", data);
    res.status(200).json("data sent successfully");
    return next();
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

async function addshop(req, res, next) {
  try {
    const data = await shop.create({
      shopId: req.body.shopId,
      shopname: req.body.name,
      address: req.body.address,
      landmark: req.body.landmark,
    });
    console.log("data entered :", data);
    return res.status(200).json("data sent successfully");
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}

async function ShowOrders(req, res, next) {
  try {
    var today = new Date();
    console.log(today);
    const user = await order.findAll({
      where: {
        shopId: req.body.shopId,
        // date:req.body.date
      },
    });
    console.log("data read : ", user);
    res.status(200).json({ user });
    return next;
  } catch (error) {
    console.log("error found", error);
    return next(error);
  }
}

async function getshop(req, res, next) {
  try {
    const user = await shop.findAll();
    console.log("data read : ", user);
    return res.status(200).json({ user });
  } catch (error) {
    console.log("error found", error);
    return next(error);
  }
}

module.exports = {
  datasend,
  sendMAil,
  // addProduct,
  // getAllProducts,
  // getOneProduct,
  // updateProduct,
  // deleteProduct,
  deleteProductinwish,
  addProductinwish,
  getAllProductsinwish,
  getOneProductinwish,
  Forum,
  Getforum,
  ContactUsMail,
  getmenu,
  deletemenu,
  updatemenu,
  OrderFood,
  ShowOrders,
  getshop,
  addshop,
  addmenu,

  // upload,

  // getPublishedProduct,
  // getProductReviews,
  // upload
};

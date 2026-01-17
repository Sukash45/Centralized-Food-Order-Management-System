// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";

// //const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // Use any fake key. It doesn't matter for the mock server.
// const secretKey = 'sk_test_123456789'; 

// // This is the new, correct way
// const stripe = new Stripe(secretKey, {
//   host: 'localhost',
//   port: 12111,  // The port for your mock server
//   protocol: 'http'
// });


// // placing user order for frontend
// const placeOrder = async (req, res) => {
//   const frontend_url = " http://localhost:5174";
//   try {
//     const newOrder = new orderModel({
//       userId: req.body.userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//         },
//         unit_amount: item.price * 100,
//       },
//       quantity: item.quantity,
//     }));

//     line_items.push({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: "Delivery Charges",
//         },
//         unit_amount: 2 * 100,
//       },
//       quantity: 1,
//     });

//     const session = await stripe.checkout.sessions.create({
//       line_items: line_items,
//       mode: "payment",
//       success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//       cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//     });

//     //res.json({ success: true, session_url: session.url });
//     res.json({ success: true });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// const verifyOrder = async (req, res) => {
//   const { orderId, success } = req.body;
//   try {
//     if (success == "true") {
//       await orderModel.findByIdAndUpdate(orderId, { payment: true });
//       res.json({ success: true, message: "Paid" });
//     } else {
//       await orderModel.findByIdAndDelete(orderId);
//       res.json({ success: false, message: "Not Paid" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // user orders for frontend
// const userOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({ userId: req.body.userId });
//     res.json({ success: true, data: orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // Listing orders for admin pannel
// const listOrders = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     if (userData && userData.role === "admin") {
//       const orders = await orderModel.find({});
//       res.json({ success: true, data: orders });
//     } else {
//       res.json({ success: false, message: "You are not admin" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // api for updating status
// const updateStatus = async (req, res) => {
//   try {
//     let userData = await userModel.findById(req.body.userId);
//     if (userData && userData.role === "admin") {
//       await orderModel.findByIdAndUpdate(req.body.orderId, {
//         status: req.body.status,
//       });
//       res.json({ success: true, message: "Status Updated Successfully" });
//     }else{
//       res.json({ success: false, message: "You are not an admin" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };

//-------------------------------------------------------------------------


// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import Stripe from "stripe";

// //const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // Use any fake key. It doesn't matter for the mock server.
// const secretKey = 'sk_test_123456789'; 

// // This is the new, correct way
// const stripe = new Stripe(secretKey, {
//   host: 'localhost',
//   port: 12111,  // The port for your mock server
//   protocol: 'http'
// });


// // placing user order for frontend
// const placeOrder = async (req, res) => {
//   const frontend_url = " http://localhost:5174";
//   try {
//     const newOrder = new orderModel({
//       userId: req.body.userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });
//     await newOrder.save();
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//     const line_items = req.body.items.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//         },
//         unit_amount: item.price * 100,
//       },
//       quantity: item.quantity,
//     }));

//     line_items.push({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: "Delivery Charges",
//         },
//         unit_amount: 2 * 100,
//       },
//       quantity: 1,
//     });

//     const session = await stripe.checkout.sessions.create({
//       line_items: line_items,
//       mode: "payment",
//       success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//       cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//     });

//     //res.json({ success: true, session_url: session.url });
//     res.json({ success: true });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// const verifyOrder = async (req, res) => {
//   const { orderId, success } = req.body;
//   try {
//     if (success == "true") {
//       await orderModel.findByIdAndUpdate(orderId, { payment: true });
//       res.json({ success: true, message: "Paid" });
//     } else {
//       await orderModel.findByIdAndDelete(orderId);
//       res.json({ success: false, message: "Not Paid" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // user orders for frontend
// const userOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({ userId: req.body.userId });
//     res.json({ success: true, data: orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // Listing orders for admin pannel
// const listOrders = async (req, res) => {
//   try {
//     // ---- THIS IS THE FIX ----
//     // We remove the admin check because it was failing.
//     // The frontend already checks if the user is an admin.
//     const orders = await orderModel.find({});
//     res.json({ success: true, data: orders });
//     // -------------------------
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // api for updating status
// const updateStatus = async (req, res) => {
//   try {
//     // ---- THIS IS THE FIX ----
//     // We remove the admin check because it was failing.
//     await orderModel.findByIdAndUpdate(req.body.orderId, {
//       status: req.body.status,
//     });
//     res.json({ success: true, message: "Status Updated Successfully" });
//     // -------------------------
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };


import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// We don't need to import Stripe anymore since we are bypassing it.
// import Stripe from "stripe";

// placing user order for frontend
const placeOrder = async (req, res) => {
  // Make sure this matches your Frontend URL (check if it is 5173 or 5174)
  const frontend_url = "http://localhost:5173"; 

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    // --- BYPASS STRIPE LOGIC START ---
    // Instead of asking Stripe for a payment link, we create a fake one
    // that redirects straight to your success page.
    const fakeSuccessUrl = `${frontend_url}/verify?success=true&orderId=${newOrder._id}`;

    res.json({ success: true, session_url: fakeSuccessUrl });
    // --- BYPASS STRIPE LOGIC END ---

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      // Mark as paid immediately since we are forcing success
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// user orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Listing orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// api for updating status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Status Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
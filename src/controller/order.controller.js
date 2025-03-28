import { isValidObjectId } from "mongoose";
import orderModel from "../model/order.model.js";

const getAllOrders = async (req, res) => {
  const orders = await orderModel.find().populate("products");

  res.send({
    message: "success",
    data: orders,
  });
};

const getOneOrder = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).send({
      message: `Given ID: ${id} is not valid Object ID`,
    });
  }

  const order = await orderModel.findById(id).populate("products");

  if (!order) {
    return res.status(404).send({
      message: `Order with ID: ${id} not found`,
    });
  }

  res.send({
    message: "success",
    data: order,
  });
};

const createOrder = async (req, res) => {
  const { userId, products, totalPrice } = req.body;

  const order = await orderModel.create({ userId, products, totalPrice });

  res.send({
    message: "success",
    data: order,
  });
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { userId, products, totalPrice, status } = req.body;

  if (!isValidObjectId(id)) {
    return res.status(400).send({
      message: `Given ID: ${id} is not valid Object ID`,
    });
  }

  const updatedOrder = await orderModel.findByIdAndUpdate(
    id,
    { userId, products, totalPrice, status },
    { new: true }
  );

  res.send({
    message: "success",
    data: updatedOrder,
  });
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).send({
      message: `Given ID: ${id} is not valid Object ID`,
    });
  }

  const order = await orderModel.findByIdAndDelete(id);

  res.send({
    message: "success",
    data: order,
  });
};

export default {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};

const asyncHandler = require('express-async-handler');

const Ticket = require('../models/ticketModel');

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  // const tickets = await Ticket.
  res.status(200).json({ message: 'get tickets' });
});

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'create ticket' });
});

module.exports = {
  getTickets,
  createTicket,
};

import Fastify from 'fastify';
import cors from '@fastify/cors';
import { eventsRoutes } from './routes/events.js';
import { bookingsRoutes } from './routes/bookings.js';
import { adminEventsRoutes } from './routes/admin/events.js';
import { adminBookingsRoutes } from './routes/admin/bookings.js';

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, {
  origin: ['http://localhost:5173', 'http://localhost:4173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
});

await fastify.register(eventsRoutes);
await fastify.register(bookingsRoutes);
await fastify.register(adminEventsRoutes);
await fastify.register(adminBookingsRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
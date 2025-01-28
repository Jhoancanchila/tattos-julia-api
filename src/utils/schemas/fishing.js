const z = require("zod");

const fishingSchema = z.object({
  currentPassword: z.string({
    invalid_type_error: "La contraseña actual debe ser una cadena.",
    required_error: 'La contraseña actual es requerida'
  }),
  newPassword: z.string({
    invalid_type_error: "La nueva contraseña debe ser una cadena.",
    required_error: 'La nueva contraseña es requerida'
  }),
});

const validateFishing = (object) => {
  return fishingSchema.safeParse(object);
};

module.exports = {
  validateFishing,
}
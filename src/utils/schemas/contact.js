const z = require("zod");

const contactSchema = z.object({
  name: z.string({
    invalid_type_error: "El nombre del contacto debe ser una cadena.",
    required_error: 'El nombre del contacto es requerido'
  }),
  email: z.string()
  .min(1, { message: "Este campo debe ser completado." })
  .email("Este no es un correo electrónico válido."),
  phone: z.string(),
  message: z.string()
  .min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
  .max(480, { message: "El mensaje no puede tener más de 500 caracteres." })
})

//validar contacto safeparse devuelve un objeto indicando si hay error o no
function validateContact (object) {
  return contactSchema.safeParse(object)
}

module.exports = {
  validateContact,
}
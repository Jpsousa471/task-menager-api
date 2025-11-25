import { z } from 'zod';
export const createTaskSchema = z.object({
    title: z
        .string()
        .min(3, { message: 'Otítulo deve ter o mínino de 3 caracteres.' }),
    description: z
        .string()
        .min(10, { message: 'A descrição deve ter o mínimo de 10 caracteres.' }),
    images: z
        .array(z.string().url({ message: 'Essa não é uma URL válida.' }), {
        message: 'A lista de URL´s é obrigatória.'
    })
        .min(1, { message: 'A lista de imagens não pode estar vazia.' })
});

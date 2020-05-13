import { models } from "../db";

const include = [
  { model: models.Ticket, as: 'children' }
];

export const Query = {
    tickets: async (root, args, context) => {
      return await models.Ticket.findAll({
        include,
        where: {
          parentId: null
        }
      });
      
    },
    ticket: async (root, args, context) => {
      return await models.Ticket.findOne({
          include,
          where: {
              id: args['id']
          }
      });

    }

}

import { models } from "../db";
import { Query } from './query';

const include = [
    { model: models.Ticket, as: 'children' }
];

export const Mutation = {
    createTicket: async (root, args, context) => {
        const ticket = await models.Ticket.create({
            include,
            title: args['title'],
            isCompleted: args['isCompleted']
        });

        return ticket;

    },
    updateTicket: async (root, args, context) => {
        const where = {
            id: args['id']
        };

        await models.Ticket.update({
            title: args['title']
        }, { where });
        return await Query.ticket(root, args, context); //! Sequelize doesn't return, by default, the updated registry in update() function. Needs a second query.

       
    },
    toggleTicket: async (root, args, context) => {
        const where = {
            id: args['id']
        };

        await models.Ticket.update({
            isCompleted: args['isCompleted']
        }, { where });

        return await Query.ticket(root, args, context);
        
    },
    removeTicket: async (root, args, context) => {
        const removed = await models.Ticket.destroy({
            include,
            where: {
                id: args['id']
            }
        });

        return removed ? true : false;

    },
    addChildrenToTicket: async (root, args, context) => {
        await args['childrenIds'].forEach(async childrenId => {
            await models.Ticket.update({
                parentId: args['parentId'] 
            }, {
                where: {
                    id: childrenId
                }
            })
        });

        return await Query.ticket(root, {id: args['parentId']}, context);

    },
    setParentOfTicket: async (root, args, context) => {
        await models.Ticket.update({
                parentId: args['parentId']
            }, {
            where: {
                id: args['childId']
            }
        });

        return await Query.ticket(root, {id: args['parentId']}, context); //? Should return wich Ticket ? the parent or the children? I assume its the parent

    },
    removeParentFromTicket: async (root, args, context) => {
        await models.Ticket.update({
            parentId: null
        }, {
            where: {
                id: args['id']
            }
        });

        return await Query.ticket(root, args, context);

    }

}

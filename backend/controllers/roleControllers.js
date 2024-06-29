const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getRoles = async (req, res) => {
    try {
        const roles = await prisma.role.findMany();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createRole = async (req, res) => {
    const { name } = req.body;
    try {
        const newRole = await prisma.role.create({
            data: {
                name
            }
        });
        res.status(201).json(newRole);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateRole = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updatedRole = await prisma.role.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name
            }
        });
        res.json(updatedRole);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteRole = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.role.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.json({ message: "Role deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getRoles, createRole, updateRole, deleteRole };

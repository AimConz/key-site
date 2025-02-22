import { writeFile, readFile } from 'fs/promises';

const filePath = './keys.json';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { key } = req.body;
        if (!key) return res.status(400).json({ success: false, message: "Key is required" });

        try {
            let keys = [];
            try {
                const data = await readFile(filePath, 'utf8');
                keys = JSON.parse(data);
            } catch (error) {}

            keys.push(key);
            await writeFile(filePath, JSON.stringify(keys, null, 2));

            return res.json({ success: true, message: "Key stored successfully!" });
        } catch (error) {
            return res.status(500).json({ success: false, message: "Error storing key" });
        }
    } else if (req.method === 'GET') {
        try {
            const data = await readFile(filePath, 'utf8');
            return res.json({ success: true, keys: JSON.parse(data) });
        } catch (error) {
            return res.json({ success: true, keys: [] });
        }
    }
}

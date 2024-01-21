// pages/api/submit.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // 转发请求到外部API
            const response = await fetch('https://booki.chat/form_submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req.body),
            });

            const data = await response.text();

            if (!response.ok) {
                res.status(500).json({message: data})
            } else {
                res.status(200).json({message: data})
            }
        } catch (error) {
            // 处理错误
            res.status(500).json({message: error.message});
        }
    } else {
        // 处理非POST请求
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

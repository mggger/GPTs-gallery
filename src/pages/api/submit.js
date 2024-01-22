// pages/api/submit.js
export const runtime = 'edge';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const {email, question} = await req.json();

            const response = await fetch('https://booki.chat/form_submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, question}),

            });

            const data = await response.text();

            if (!response.ok) {
                return new Response(data, { status: response.status });
            } else {
                return new Response(JSON.stringify({ message: data }), {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }
        } catch (error) {
            return new Response(JSON.stringify({ message: error.message }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    } else {
        return new Response(`Method ${req.method} Not Allowed`, {
            status: 405,
            headers: {
                'Allow': ['POST'],
            },
        });
    }
}

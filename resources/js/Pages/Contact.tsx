// Pages/Contact.tsx
import AppLayout from '@/Layouts/AppLayout';
import {useForm} from "@inertiajs/react";


export default function Contact() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        message: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(route('contact.send'));   // create this endpoint if needed
    }

    return (
        <AppLayout>
            <section className="container mx-auto py-24 max-w-xl">
                <h1 className="text-3xl font-bold mb-8">Let’s talk</h1>

                <form onSubmit={submit} className="space-y-6">
                    <input
                        required
                        type="text"
                        placeholder="Name"
                        className="w-full input"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <input
                        required
                        type="email"
                        placeholder="Email"
                        className="w-full input"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <textarea
                        required
                        placeholder="Message"
                        className="w-full textarea h-32"
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={processing}
                    >
                        Send
                    </button>
                    {errors && (
                        <p className="text-red-500 text-sm">{Object.values(errors)[0]}</p>
                    )}
                </form>
            </section>
        </AppLayout>
    );
}

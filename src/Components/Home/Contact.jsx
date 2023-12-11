import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "PortfolioSite",
                    from_email: form.email,
                    to_email: "ariful2634@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                () => {
                    setLoading(false);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };


    return (
        <div>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='mt-12 flex flex-col gap-8'
            >
                <label className='flex flex-col'>
                    <span className=' font-medium mb-4'>Your Name</span>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your good name?"
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg  border font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className=' font-medium mb-4'>Your email</span>
                    <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your web address?"
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg border  font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className=' font-medium mb-4'>Your Message</span>
                    <textarea
                        rows={7}
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder='What you want to say?'
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg  border font-medium'
                    />
                </label>

                <button
                    type='submit'
                    className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit  font-bold shadow-md shadow-primary'
                >
                    {loading ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
};

export default Contact;
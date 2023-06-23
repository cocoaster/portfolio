const plugin = require('tailwindcss/plugin')

const Contact = () => {
    plugins: [
        plugin(function({ addUtilities, addComponents, e, config }) {
          // Add your custom styles here
        }),
      ]
    return (
        <div>
            
        </div>
    );
};

export default Contact;
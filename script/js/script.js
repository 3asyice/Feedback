window.formbutton = window.formbutton || function() {
      (formbutton.q = formbutton.q || []).push(arguments) };

// Estilizando o formulário
    formbutton("create", {
      action: "https://formspree.io/f/meqyekvp",
      title: "Preencha o formulário",
      fields: [
        {
          type: "email",
          label: "Email:",
          name: "email",
          required: true,
          placeholder: "Seu email..."
        },
        {
          type: "textarea",
          label: "Message:",
          name: "message",
          required: true,
          placeholder: "Qual é o seu feedback?",
        },
        { type: "submit"
        }
      ],
      styles: {
        title: {
          textShadow: '1px 1px 1px black',
          outline: 'none',
          border: '2px solid black',
          backgroundColor: "#CAA906"
        },
        button: {
          backgroundColor: "#832CFF",
          fontWeight: '700'
        },
        label: {
          color: '#CA5640',
          textShadow: '2px 1px 1px black',
          fontWeight: '800',
          backgroundColor: '#627AE5'
        },
        form: {
          backgroundColor: '#627AE5'
        },
        body: {
          outline: 'none',
          border: '2px solid black',
          backgroundColor: '#627AE5'
        },
        input: {
          border: '2px solid black',
          fontWeight: '700',
          borderRadius: '5px'
        }
        
      }
    });
const { createApp } = Vue;

createApp({
  data() {
    return {
      currentTime: "",
      currentContact: {},
      contacts: [
        {
            name: 'Michele',
            avatar: './img/avatar_1.png',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: './img/avatar_2.png',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        // Aggiungi gli altri contatti qui...
      ]
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
    // Imposto il primo contatto come predefinito
    this.currentContact = this.contacts[0];
  },
  methods: {
    updateTime() {
      const options = {
        hour: "2-digit",
        minute: "2-digit"
      };
      this.currentTime = new Date().toLocaleTimeString([], options);
    },
    selectContact(contact) {
      this.currentContact = contact;
    },
    formatDate(date) {
      return moment(date, 'DD/MM/YYYY HH:mm:ss').format('HH:mm');
    }
  }
}).mount("#app");
var app = new Vue ({
    el: "#app",
    data: {
        name: "Bullying-Platform",
        bullied: "Bullied",
        bullyer: "Bullyer",
        description:"ไม่ทราบว่าคุณเคยประสบปัญหาเกี่ยวกับการถูกกลั่นแกล้งหรือไม่ บอกเราได้มั้ยว่าตอนนี้คุณอยู่ในสถานะไหน",
        githuburl: "https://github.com/lebrancconvas/Bullying-Platform",
        facebookurl: "https://www.facebook.com/reallebrancconvas/"
    },
    methods: {
        getName: function(){
            return this.name;
        }
    }
});
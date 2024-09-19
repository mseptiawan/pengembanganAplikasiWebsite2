const express = require('express');
const router = express.Router();

router.use('/',(req,res)=>{
    const data  = {
        caption: "mahasiswa",
        layout : 'layout/main-layout',
        data : [
            {
                npm: '2226240097',
                nama: 'bruno mars',
                image: 'https://akcdn.detik.net.id/visual/2023/11/19/bruno-mars_43.png?w=650&q=90'
                
            },
            {
                npm: '2226240011',
                nama: 'ronaldo',
                image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXqO4pBeLoXaegT8aDlnPzNBT0j-EmFaYi9_iL_ZFCago1SNWD'
                
            },
            {
                npm: '2226240042',
                nama: 'messi',
                image: 'https://www.blibli.com/friends-backend/wp-content/uploads/2024/05/B130125-Cover-Profil-Lionel-Messi.jpg'
                
            },
        ]
    }

    res.render('index',data)
});

module.exports = router;
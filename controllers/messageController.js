const messages = [
    {
      text: 'Hello there!',
      user: 'Aando',
      added: new Date()
    },
    {
      text: 'Hello peeps!',
      user: 'Charles',
      added: new Date()
    },
    {
        text: 'Testings',
        user: 'Dielawn',
        added: new Date()
    }
]

exports.index = (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
};

exports.new_message_get = (req, res) => {
    res.render('message_form', { title: 'Add New Message' });
};

exports.new_message_post = (req, res) => {
    messages.push({
        text: req.body.messageTxt,
        user: req.body.userName,
        added: new Date(),
    });
    res.redirect('/');
};
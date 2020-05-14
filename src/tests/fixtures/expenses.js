import moment from 'moment'
export default [{
    id:'123',
    description:'gum',
    note:'gum note',
    amount:10,
    createdAt:moment(0)
},{
    id:'1234',
    description:'letter',
    note:'letter note',
    amount:100,
    createdAt:moment(0).subtract(4,'days').valueOf()
},
{
    id:'12345',
    description:'table',
    note:'table note',
    amount:10000,
    createdAt:moment(0).add(4,'days').valueOf()
}
]
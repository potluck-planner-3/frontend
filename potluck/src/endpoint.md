-potluck endpoints
GET /api/potlucks
object:[
    {
        "owner_id": #,
        "name": "string",
        "where": "string",
        "date": "string",
        "category": "string"
    }
]
GET /api/potlucks/:id
object:{
    "id": #,
    "owner_id": #,
    "name": "string",
    "where": "string",
    "date": "string",
    "category": "string",
    "attendees": [
        {
            "id": #,
            "attendee_id": #,
            "potluck_id": #,
            "bringing_item_id": #
        },
        {
            "id": #,
            "attendee_id": #,
            "potluck_id": #,
            "bringing_item_id": #
        },
        {
            "id": #,
            "attendee_id": #,
            "potluck_id": #,
            "bringing_item_id": #
        }
    ],
    "items": [
        {
              id: 7,
              potluck_id: 3,
              item_id: 1,
              being_brought_by: 'test',
              item_name: { id: 1, name: 'none' }
        }
    ]
}
POST /api/potlucks
needs:{
    "owner_id": #,
    "name": "string",
    "where": "string",
    "date": "string",
    "category": "string"
}
PUT /api/potlucks/:id
needs:{
    "owner_id": #,
    "name": "string",
    "where": "string",
    "date": "string",
    "category": "string"
}
DELETE /api/potlucks/:id
returns the object that was deleted
items in potlucks
GET /api/potlucks/items/:id <-potluck id to get it's items
object:[
    {
    id:#
    potluck_id:#
    item_id:#
    being_brought_by:""
    }
]
POST /api/potlucks/items/:id <-potluck id to add item
needs:
{
item id:#
being_brought_by:""
}
DELETE /api/potlucks/items/:id <-id from the specific id that items get when added to potlucks
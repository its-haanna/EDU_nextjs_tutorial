migrate((db) => {
  const collection = new Collection({
    "id": "f1m5456in1s2y3p",
    "created": "2023-02-17 08:57:06.234Z",
    "updated": "2023-02-17 08:57:06.234Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6s6hdo6j",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 5,
          "max": 200,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kfi4ye1i",
        "name": "content",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("f1m5456in1s2y3p");

  return dao.deleteCollection(collection);
})

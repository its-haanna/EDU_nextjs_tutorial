migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f1m5456in1s2y3p")

  // remove
  collection.schema.removeField("kfi4ye1i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "juklr8fz",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f1m5456in1s2y3p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kfi4ye1i",
    "name": "content",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("juklr8fz")

  return dao.saveCollection(collection)
})

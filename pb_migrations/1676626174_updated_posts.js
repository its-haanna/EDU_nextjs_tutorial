migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f1m5456in1s2y3p")

  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f1m5456in1s2y3p")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
})

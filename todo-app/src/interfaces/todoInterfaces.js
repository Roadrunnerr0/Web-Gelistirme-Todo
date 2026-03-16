/**
 * @typedef {Object} TodoItem
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {boolean} completed
 */

/**
 * Yardımcı fonksiyon: yeni bir TodoItem nesnesi üretir.
 * @param {string} title
 * @param {string} description
 * @returns {TodoItem}
 */
export function createTodo(title, description) {
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    description: description.trim(),
    completed: false,
  };
}


/**
 * @typedef {Object} Service
 * @property {string} id - Unique identifier for the service
 * @property {string} title - Service title/name
 * @property {string} description - Service description
 * @property {string} iconName - Name of the icon to use (e.g., 'ChefHat', 'Droplet')
 */

/**
 * @typedef {Object} GalleryProject
 * @property {string} id - Unique identifier for the project
 * @property {string} title - Project title
 * @property {string} category - Project category (e.g., 'Kitchen', 'Bathroom')
 * @property {string} beforeImg - URL to the before image
 * @property {string} afterImg - URL to the after image
 * @property {string} description - Project description
 */

/**
 * @typedef {Object} TeamMember
 * @property {string} name - Team member's name
 * @property {string} role - Team member's role/title
 * @property {string} experience - Years of experience (e.g., '18+ Years')
 * @property {string} bio - Team member's bio/description
 * @property {string} image - URL to the team member's image
 */

/**
 * @typedef {Object} Message
 * @property {'user' | 'model'} role - Message role (user or model/AI)
 * @property {string} text - Message text content
 */

// Export type definitions for use in JSDoc comments
// These are documentation-only and don't affect runtime behavior

export {};

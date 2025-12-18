// Task Management Utilities
// These functions will be used by a React app to manage tasks

/**
 * Filters tasks by their completion status
 * @param {Array} tasks - Array of task objects
 * @param {boolean} completed - Whether to filter for completed or incomplete tasks
 * @returns {Array} Filtered array of tasks
 */
export function filterTasksByStatus(tasks, completed) {
    // Use .filter() to return tasks that match the completion status
    return tasks.filter(task => task.completed === completed);
}

/**
 * Gets all tasks with high priority
 * @param {Array} tasks - Array of task objects
 * @returns {Array} Array of high priority tasks
 */
export function getHighPriorityTasks(tasks) {
    return tasks.filter(task => task.priority === 'high');
}

/**
 * Transforms tasks into display strings
 * @param {Array} tasks - Array of task objects
 * @returns {Array} Array of formatted task strings
 */
export function formatTasksForDisplay(tasks) {
    // Use .map() to create strings like "Task: Buy groceries (Priority: high)"
    return tasks.map(task => `Task: ${task.title} (Priority: ${task.priority})`);
}

/**
 * Adds unique tags from a tags array to an array
 * @param {Array} array - Array to add unique tags to
 * @param {Array} tags - Array of tag strings to process
 * @returns {undefined} No return value (mutates array)
 */
export function addUniqueTags(array, tags) {
    let newTags = tags.filter(tag => !array.includes(tag));
    array.push(...newTags);
}

/**
 * Extracts all unique tags from all tasks
 * @param {Array} tasks - Array of task objects
 * @returns {Array} Array of unique tag strings
 */
export function getAllUniqueTags(tasks) {
 
    return tasks.reduce((acc, task) => {
        task.tags.forEach(tag => {
            if (!acc.includes(tag)) {
                acc.push(tag);
            }
        });
        return acc;
    }, []);
}

/**
 * Calculates total number of completed tasks
 * @param {Array} tasks - Array of task objects
 * @returns {number} Count of completed tasks
 */
export function countCompletedTasks(tasks) {
    return (tasks.filter(task => task.completed)).length;
}

/**
 * Checks if all tasks are completed
 * @param {Array} tasks - Array of task objects
 * @returns {boolean} True if all tasks are completed
 */
export function areAllTasksComplete(tasks) {
    return tasks.every(task => task.completed);
}

/**
 * Checks if there are any high priority tasks
 * @param {Array} tasks - Array of task objects
 * @returns {boolean} True if at least one task has priority === 'high'
 */
export function hasHighPriorityTasks(tasks) {
    return tasks.some(task => task.priority === 'high');
}

/**
 * Finds a task by its ID
 * @param {Array} tasks - Array of task objects
 * @param {number} id - Task ID to find
 * @returns {Object|undefined} The task object or undefined if not found
 */
export function findTaskById(tasks, id) {
    return tasks.find(task => task.id === id);
}

/**
 * Sends a notification for each incomplete task
 * @param {Array} tasks - Array of task objects
 * @returns {undefined} No return value (side effect function)
 */
export function notifyIncompleteTasks(tasks) {
    // Example output: "Reminder: Complete 'Buy groceries'"
    tasks.forEach(task => {
        if (!task.completed) {
            console.log(`Reminder: Complete '${task.title}'`);
        }
    })
}

/**
 * Calculates productivity statistics
 * @param {Array} tasks - Array of task objects
 * @returns {Object} Object with totalTasks, completedTasks, and completionRate
 */
export function calculateProductivityStats(tasks) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const completionRate = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    return {
        totalTasks,
        completedTasks,
        completionRate: parseFloat(completionRate.toFixed(2))
    };
}

/**
 * Gets tasks grouped by priority
 * @param {Array} tasks - Array of task objects
 * @returns {Object} Object with keys 'high', 'medium', 'low' containing task arrays
 */
export function groupTasksByPriority(tasks) {
    
    return tasks.reduce((acc, task) => {
        if (task.priority === 'high') {
            acc.high.push(task);
        } else if (task.priority === 'medium') {
            acc.medium.push(task);
        } else if (task.priority === 'low') {
            acc.low.push(task);
        }
        return acc;
    }, { high: [], medium: [], low: [] });
}


/**
 * Sorts tasks by priority (high -> medium -> low) and then by completion status
 * @param {Array} tasks - Array of task objects
 * @returns {Array} New sorted array (don't mutate original)
 */
export function sortTasksByPriorityAndStatus(tasks) {
    // Create a copy of the tasks array to avoid mutating the original
    const sortedTasks = [...tasks];

    // Map the priority string values to numeric for easier sorting
    const priorityValue = { high: 3, medium: 2, low: 1 };

    // Map completion status 1 if true, 0 if false
    const completionValue = (completed) => completed ? 1 : 0;

    return sortedTasks.sort((a, b) => {
        // Sort by priority first
        const priorityDiff = priorityValue[b.priority] - priorityValue[a.priority];

        // If priorities are different, return that difference
        if (priorityDiff !== 0) {
            return priorityDiff;
        }

        // If priorities are the same, sort by completion status
        return completionValue(a.completed) - completionValue(b.completed);
    });
}

/**
 * Filters tasks by priority level
 * @param {Array} tasks - Array of task objects
 * @param {string} priority - Priority level to filter by ('high', 'medium', or 'low')
 * @returns {Array} Filtered array of tasks with matching priority
 */
export function filterTasksByPriority(tasks, priority) {
    return tasks.filter(task => task.priority === priority);
}

/**
 * Formats a date string from YYYY-MM-DD to a readable format like "13th Dec 2025"
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date string with ordinal suffix (e.g., "1st Jan 2026")
 */
export function formatDate(dateString) {
    // Parse the date string and format it with ordinal suffix
    // Example: "2025-12-13" should become "13th Dec 2025"
    const date = new Date(dateString);
    const day = date.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Create a helper to get ordinal suffixes (1st, 2nd, 3rd, 4th, etc.)
    const getOrdinalSuffix = (n) => {
        if (n > 3 && n < 21) return 'th';
        // Use modulo to calc remainder from n/10 
        switch (n % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
}

/**
 * Checks if a given route path matches the current URL path
 * @param {string} routePath - The route path to check (e.g., '/dashboard', '/tasks')
 * @param {string} currentPath - The current URL path from the browser
 * @returns {boolean} True if the route matches, false otherwise
 */
export function isRouteActive(routePath, currentPath) {
  // Exact match for home route
  if (routePath === '/' && currentPath === '/') {
    return true;
  }
  
  // For other routes, check if currentPath starts with routePath
  if (routePath !== '/' && currentPath.startsWith(routePath)) {
    return true;
  }
  
  return false;
}

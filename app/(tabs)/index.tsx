import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Alert } from 'react-native';
import { Appbar, TextInput, Button, List, Checkbox, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import * as Crypto from 'expo-crypto';

// Define the type for a task
type Task = {
  id: string;
  title: string;
  completed: boolean;
};

// Custom Light Theme
const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // Primary color for buttons, FAB, etc.
    accent: '#03dac4', // Accent color for checkboxes, switches, etc.
    background: '#ffffff', // Background color
    surface: '#ffffff', // Surface color for cards, inputs, etc.
    text: '#000000', // Text color
    placeholder: '#888888', // Placeholder color for inputs
    disabled: '#cccccc', // Disabled color for buttons, etc.
  },
};

// Custom Dark Theme
const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#bb86fc', // Primary color for buttons, FAB, etc.
    accent: '#03dac4', // Accent color for checkboxes, switches, etc.
    background: '#121212', // Background color
    surface: '#1e1e1e', // Surface color for cards, inputs, etc.
    text: '#ffffff', // Text color
    placeholder: '#888888', // Placeholder color for inputs
    disabled: '#555555', // Disabled color for buttons, etc.
  },
};

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Generate a unique ID for each task
  const generateUUID = () => {
    return Crypto.randomUUID();
  };

  // Add or update a task
  const addOrUpdateTask = () => {
    if (task.trim()) {
      if (editingTaskId) {
        // Update existing task
        setTasks(
          tasks.map((t) =>
            t.id === editingTaskId ? { ...t, title: task } : t
          )
        );
        setEditingTaskId(null);
      } else {
        // Add new task
        setTasks([...tasks, { id: generateUUID(), title: task, completed: false }]);
      }
      setTask('');
    }
  };

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion status
  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Edit a task
  const editTask = (id: string) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    if (taskToEdit) {
      setTask(taskToEdit.title);
      setEditingTaskId(id);
    }
  };

  // Clear all tasks
  const clearAllTasks = () => {
    Alert.alert(
      'Clear All Tasks',
      'Are you sure you want to delete all tasks?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => setTasks([]) },
      ]
    );
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Count completed tasks
  const completedTasksCount = tasks.filter((t) => t.completed).length;

  // Define the theme based on the mode
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Appbar.Header>
          <Appbar.Content
            title="To-Do App"
            titleStyle={{ color: theme.colors.text }} // Set app name color dynamically
          />
          <Appbar.Action
            icon={isDarkMode ? 'weather-sunny' : 'weather-night'}
            onPress={toggleDarkMode}
            color={theme.colors.text} // Set icon color dynamically
          />
          <Appbar.Action
            icon="delete"
            onPress={clearAllTasks}
            color={theme.colors.text} // Set icon color dynamically
          />
        </Appbar.Header>

        <ScrollView style={styles.content}>
          {tasks.map((task) => (
            <List.Item
              key={task.id}
              title={task.title}
              description={task.completed ? 'Completed' : 'Pending'}
              left={() => (
                <Checkbox
                  status={task.completed ? 'checked' : 'unchecked'}
                  onPress={() => toggleTaskCompletion(task.id)}
                  color={theme.colors.primary} // Set checkbox color dynamically
                />
              )}
              right={() => (
                <View style={styles.taskActions}>
                  <Button onPress={() => editTask(task.id)} color={theme.colors.primary}>
                    Edit
                  </Button>
                  <Button onPress={() => deleteTask(task.id)} color={theme.colors.primary}>
                    Delete
                  </Button>
                </View>
              )}
            />
          ))}
        </ScrollView>

        <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
          <TextInput
            label="New Task"
            value={task}
            onChangeText={(text: string) => setTask(text)}
            style={styles.input}
            theme={theme} // Apply theme to TextInput
          />
          <Button mode="contained" onPress={addOrUpdateTask} style={styles.button} color={theme.colors.primary}>
            {editingTaskId ? 'Update Task' : 'Add Task'}
          </Button>
        </View>

        <View style={[styles.taskCountContainer, { backgroundColor: theme.colors.surface }]}>
          <Text style={{ color: theme.colors.text }}>Total Tasks: {tasks.length}</Text>
          <Text style={{ color: theme.colors.text }}>Completed Tasks: {completedTasksCount}</Text>
        </View>

      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6200ee',
  },
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskCountContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
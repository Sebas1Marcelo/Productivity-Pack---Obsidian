module.exports = class MyKanbanPlugin {
  onload() {
    this.addCommand({
      id: 'create-kanban',
      name: 'Create Kanban View',
      callback: () => this.createKanban(),
    });

    this.addSettingTab(new SampleSettingTab(this.app, this));
  }

  createKanban() {
    const kanbanContainer = this.getKanbanContainer();
    document.body.appendChild(kanbanContainer);
  }

  getKanbanContainer() {
    const container = document.createElement('div');
    container.classList.add('kanban-container');

    const columns = ['To Do', 'In Progress', 'Done'];
    columns.forEach((columnTitle) => {
      const column = document.createElement('div');
      column.classList.add('kanban-column');
      column.innerHTML = `<h2>${columnTitle}</h2>`;
      container.appendChild(column);
    });

    return container;
  }

  onunload() {
    console.log('Kanban plugin unloaded');
  }
};

class SampleSettingTab extends PluginSettingTab {
  display() {
    const { containerEl } = this;
    containerEl.empty();

    containerEl.createEl('h2', { text: 'Kanban Plugin Settings' });
  }
}
export class ConfirmationPopup extends Popup {
  open({ handleSubmit }) {
    this.handleSubmit = handleSubmit;
    super.open();
  }

  close() {
    this.handleSubmit = undefined;
  }

  handleClick() {
    this.handleSubmit();
  }
}

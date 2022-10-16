import classes from './starting-page.module.css';

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <section className={classes.starting}>
      <h1>Welcome <br />To <br />Invoices<br /> Project</h1>
    </section>
  );
}

export default StartingPageContent;

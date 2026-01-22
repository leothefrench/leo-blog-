const Footer = () => {
  return (
    <footer className="border-t py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Léo Blog. Tous droits réservés.
        </p>

        <a
          href="mailto:leothefrench@gmail.com"
          className="text-sm font-medium hover:underline underline-offset-4 decoration-primary"
        >
          Me contacter : leothefrench@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;

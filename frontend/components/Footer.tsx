import Button from "./Button";

const Footer = () => {
  return (
    <div className="bg-zinc-700 text-zinc-200 grid grid-cols-12 p-10 ">
      <div className="col-span-2 hidden md:block lg:block">
        <p className="font-semibold mb-3">Encontre seu veículo</p>
        <div className="text-sm">
          <p>Encontre seu veículo</p>
          <p>Lojas</p>
          <p>Promoções</p>
          <p>Vantagens</p>
          <p>Garantia Mais</p>
        </div>
      </div>

      <div className="col-span-2 hidden md:block lg:block">
        <p className="font-semibold mb-3">A Empresa</p>
        <div className="text-sm">
          <p>Sobre</p>
          <p>Delivery</p>
          <p>Aviso de privacidade</p>
          <p>Blog seminovos</p>
        </div>
      </div>
      <div className="col-span-2 hidden md:block lg:block">
        <p className="font-semibold mb-3">Atendimento</p>
        <div className="text-sm">
          <p>Perguntas frequentes</p>
          <p>Fale conosco</p>
          <p>Pós-vendas</p>
        </div>
      </div>
      <div className="col-span-2 hidden md:block lg:block">
        <p className="font-semibold mb-3">Lojistas</p>
        <div className="text-sm">
          <p>Acesse seminovos atacado</p>
        </div>
      </div>
      <div className="col-span-2 hidden md:block lg:block">
        <p className="mb-3 text-sm">Atendimento ao cliente</p>
        <div className="text-sm flex gap-2">
          <div className="bg-violet-500 flex items-center justify-center p-2 rounded-sm font-semibold">
            0800 000 000
          </div>
          <Button
            className="bg-green-500 "
            src={require("../public/images/social/whatsapp_white.svg")}
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-2 lg:col-span-2 flex flex-col items-center mb-5">
        <p className="font-semibold mb-3">Siga a gente</p>
        <div className="flex gap-2">
          <Button
            className="h-7 w-7"
            src={require("../public/images/social/facebook_white.svg")}
          />
          <Button
            className="h-7 w-7"
            src={require("../public/images/social/instagram_white.svg")}
          />
          <Button
            className="h-7 w-7"
            src={require("../public/images/social/twitter_white.svg")}
          />
          <Button
            className="h-7 w-7"
            src={require("../public/images/social/linkedin_white.svg")}
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-2 lg:col-span-2 md:hidden lg:hidden flex flex-col items-center">
        <p className="mb-3 text-sm">Atendimento ao cliente</p>
        <div className="text-sm flex gap-2">
          <div className="bg-violet-500 flex items-center justify-center p-2 rounded-sm font-semibold">
            0800 000 000
          </div>
          <Button
            className="bg-green-500 "
            src={require("../public/images/social/whatsapp_white.svg")}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

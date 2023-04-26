import { Request } from "express";
import { Form } from "multiparty";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const asyncFormParse = (req: Request): Promise<{ fields: any; files: any }> =>
  new Promise((resolve, reject) => {
    const form = new Form();
    form.parse(req, async (error, fields, files) => {
      console.log(fields, files);
      if (error) {
        reject(error);
      }

      resolve({ fields, files });
    });
  });

export default asyncFormParse;

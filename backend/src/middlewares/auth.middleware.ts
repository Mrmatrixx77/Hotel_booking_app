// import { NextFunction, Request, Response } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";

// declare global {
//   namespace Express {
//     interface Request {
//       userId: string;
//     }
//   }
// }

// const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.cookies["auth_token"];
//   console.log("token :",  token);
//   if (!token) {
//     console.log("not getting token")
//     return res.status(401).json({ message: "unauthorized" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
//     console.log("yora biro: ",decoded);
//     req.userId = (decoded as JwtPayload).userId;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "unauthorized" });
//   }
// };

// export default verifyToken;

import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

const verifyToken =  (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["auth token"];
  console.log("token :", token);
  if (!token) {
    return res.status(401).json({ message: " token nhi aara unauthorized" });
  }
  try {
    const decoded =  jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    );
    console.log("decoded : ", decoded);
    req.userId = (decoded as JwtPayload).userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: " error he unauthorized" });
  }
};
export default verifyToken;
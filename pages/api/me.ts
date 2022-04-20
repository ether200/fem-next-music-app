import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";

// it won't call the handler unless the route is validated
export default validateRoute(async (req, res, user) => {
  const playlistCount = await prisma.playlist.count({
    where: {
      userId: user.id,
    },
  });
  res.json({
    ...user,
    playlistCount,
  });
});

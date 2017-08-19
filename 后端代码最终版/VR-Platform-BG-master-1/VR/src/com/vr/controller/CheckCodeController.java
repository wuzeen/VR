package com.vr.controller;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CheckCodeController  {
	private int width = 90;// 瀹氫箟鍥剧墖鐨剋idth
	private int height = 20;// 瀹氫箟鍥剧墖鐨刪eight
	private int codeCount = 4;// 瀹氫箟鍥剧墖涓婃樉绀洪獙璇佺爜鐨勪釜鏁�
	private int xx = 15;
	private int fontHeight = 18;
	private int codeY = 16;
	char[] codeSequence = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

	@RequestMapping("/checkcode")
	public void getCode(@RequestParam(value="timestamp",required=false)String time,HttpServletRequest req, HttpServletResponse resp) throws IOException {

		// 瀹氫箟鍥惧儚buffer
		BufferedImage buffImg = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
		// Graphics2D gd = buffImg.createGraphics();
		// Graphics2D gd = (Graphics2D) buffImg.getGraphics();
		Graphics gd = buffImg.getGraphics();
		// 鍒涘缓涓�涓殢鏈烘暟鐢熸垚鍣ㄧ被
		Random random = new Random();
		// 灏嗗浘鍍忓～鍏呬负鐧借壊
		gd.setColor(Color.WHITE);
		gd.fillRect(0, 0, width, height);

		// 鍒涘缓瀛椾綋锛屽瓧浣撶殑澶у皬搴旇鏍规嵁鍥剧墖鐨勯珮搴︽潵瀹氥��
		Font font = new Font("Fixedsys", Font.BOLD, fontHeight);
		// 璁剧疆瀛椾綋銆�
		gd.setFont(font);

		// 鐢昏竟妗嗐��
		gd.setColor(Color.BLACK);
		gd.drawRect(0, 0, width - 1, height - 1);

		// 闅忔満浜х敓40鏉″共鎵扮嚎锛屼娇鍥捐薄涓殑璁よ瘉鐮佷笉鏄撹鍏跺畠绋嬪簭鎺㈡祴鍒般��
		gd.setColor(Color.BLACK);
		for (int i = 0; i < 40; i++) {
			int x = random.nextInt(width);
			int y = random.nextInt(height);
			int xl = random.nextInt(12);
			int yl = random.nextInt(12);
			gd.drawLine(x, y, x + xl, y + yl);
		}

		// randomCode鐢ㄤ簬淇濆瓨闅忔満浜х敓鐨勯獙璇佺爜锛屼互渚跨敤鎴风櫥褰曞悗杩涜楠岃瘉銆�
		StringBuffer randomCode = new StringBuffer();
		int red = 0, green = 0, blue = 0;

		// 闅忔満浜х敓codeCount鏁板瓧鐨勯獙璇佺爜銆�
		for (int i = 0; i < codeCount; i++) {
			// 寰楀埌闅忔満浜х敓鐨勯獙璇佺爜鏁板瓧銆�
			String code = String.valueOf(codeSequence[random.nextInt(10)]);
			// 浜х敓闅忔満鐨勯鑹插垎閲忔潵鏋勯�犻鑹插�硷紝杩欐牱杈撳嚭鐨勬瘡浣嶆暟瀛楃殑棰滆壊鍊奸兘灏嗕笉鍚屻��
			red = random.nextInt(255);
			green = random.nextInt(255);
			blue = random.nextInt(255);

			// 鐢ㄩ殢鏈轰骇鐢熺殑棰滆壊灏嗛獙璇佺爜缁樺埗鍒板浘鍍忎腑銆�
			gd.setColor(new Color(red, green, blue));
			gd.drawString(code, (i + 1) * xx, codeY);

			// 灏嗕骇鐢熺殑鍥涗釜闅忔満鏁扮粍鍚堝湪涓�璧枫��
			randomCode.append(code);
		}
		// 灏嗗洓浣嶆暟瀛楃殑楠岃瘉鐮佷繚瀛樺埌Session涓��
		HttpSession session = req.getSession();
		System.out.println(randomCode);
		session.setAttribute("code", randomCode.toString());
		//System.out.print(session.getAttribute("code")==null);

		// 绂佹鍥惧儚缂撳瓨銆�
		resp.setHeader("Pragma", "no-cache");
		resp.setHeader("Cache-Control", "no-cache");
		resp.setDateHeader("Expires", 0);

		resp.setContentType("image/jpeg");

		// 灏嗗浘鍍忚緭鍑哄埌Servlet杈撳嚭娴佷腑銆�
		ServletOutputStream sos = resp.getOutputStream();
		ImageIO.write(buffImg, "jpeg", sos);
		sos.close();
	}

}

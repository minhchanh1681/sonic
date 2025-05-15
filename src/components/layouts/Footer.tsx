"use client";

export default function Footer() {
	return (
		<div className="w-full bg-[#052a1e] rounded-t-4xl">
			<div className="container mx-auto">
				<div className="footer-heading py-10 text-white font-bold">
					<h1 className="leading-8 text-2xl">Bạn có ý tưởng, SONIC viết giải pháp.</h1>
					<h1 className="leading-9 text-2xl">Hãy cùng nhau tạo nên thành công!</h1>
				</div>
				<div className="border-t-2 border-b-2 border-[#a1c3bc] py-4">
					<h1 className="font-bold text-white">CÔNG TY TNHH CÔNG NGHỆ SONIC</h1>
					<div className="grid grid-cols-5 gap-4">
						<div className="col-span-3 flex flex-col [&>p]:leading-10 [&>p]:text-[#a1c3bc] [&>p]:cursor-pointer [&>p]:hover:font-bold [&>p]:hover:transition-all [&>p]:hover:duration-300">
							<p>MST: 031405287</p>
							<p>Hotline: (+84) 901 136 968</p>
							<p>Email: info@fososoft.com</p>
							<p>Địa chỉ trụ sở: số 68 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM</p>
							<p>Địa chỉ văn phòng: Tòa nhà VCC Building, 69/1/3 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, TP.HCM</p>
						</div>
						<div className="flex flex-col [&>p]:leading-10 [&>p]:text-[#a1c3bc] [&>p]:cursor-pointer">
							<h3 className=" text-white uppercase font-semibold">giải pháp</h3>
							<p>FMRP - Quản lý xưởng online</p>
							<p>Thiết kế Website</p>
							<p>Thiết kế App Mobile</p>
							<p>Thuê Hosting & Server</p>
						</div>
						<div className="flex flex-col [&>p]:leading-10 [&>p]:text-[#a1c3bc] [&>p]:cursor-pointer">
							<h3 className=" text-white uppercase font-semibold">chính sách</h3>
							<p>Chính sách bảo mật</p>
							<p>Quy định thanh toán</p>
							<p>Chính sách cookie</p>
						</div>
					</div>
				</div>
				<div className="py-4 text-center text-[#a1c3bc]">
					<p>Copyright © 2025 FOSO Co. LTD. All Rights Reserved.</p>
				</div>
			</div>
		</div>
	)
}
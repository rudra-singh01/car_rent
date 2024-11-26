export default function RentCar() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-lg font-medium text-gray-600">BEST SERVICE GUARANTEE</p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Image Section */}
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img
              src="https://www.snprentacar.com/images/resource/image-3.1.jpg"
              alt="Professional driver at steering wheel"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Welcome To SNP Rent A Car
              </h1>
              <p className="text-xl text-gray-600">- The best information</p>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
                <h2 className="mb-2 text-xl font-semibold">Quality Of Cars</h2>
                <p className="text-gray-600">
                  All Our Cars Are Fully Compliant As Per Motor Vehicles Act And Are Neatly Kept And Well Maintained. 
                  We Provide Newspaper And Bottled Water In Every Car In The Morning Before Sending For Duty.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
                <h2 className="mb-2 text-xl font-semibold">Drivers</h2>
                <p className="text-gray-600">
                  Our Drivers Are Well Experienced, Well-Mannered And Duly Trained For Good Behaviour. 
                  They Perform Duty In Proper Uniform. They Are Appointed After Necessary Police Verification 
                  And Medical Check-Up. We Also Provide English-Speaking Drivers As Per Requirement Especially 
                  For Expatriates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

